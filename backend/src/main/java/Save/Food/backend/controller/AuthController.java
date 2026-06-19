package Save.Food.backend.controller;

import Save.Food.backend.dto.LoginRequest;
import Save.Food.backend.dto.SignupRequest;
import Save.Food.backend.model.User;
import Save.Food.backend.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    private final UserRepository userRepository;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest request) {

        if (userRepository.findByUsername(request.getUsername()).isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Username already exists"));
        }

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Email already exists"));
        }

        User user = new User();
        user.setFullName(request.getFullName());
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setRole(request.getRole());

        userRepository.save(user);

        return ResponseEntity.ok(Map.of("message", "Account created successfully"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        User user = userRepository.findByUsername(request.getUsername())
                .orElse(null);

        if (user == null) {
            return ResponseEntity.status(404)
                    .body(Map.of("message", "There is no user with this username."));
        }

        if (!user.getPassword().equals(request.getPassword())) {
            return ResponseEntity.status(401)
                    .body(Map.of("message", "Wrong password."));
        }

        return ResponseEntity.ok(Map.of(
                "message", "Login successful",
                "username", user.getUsername(),
                "role", user.getRole()
        ));
    }

    @GetMapping("/users")
    public ResponseEntity<?> getUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }
}