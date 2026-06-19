package Save.Food.backend.dto;

public class SignupRequest {

    private String fullName;
    private String username;
    private String email;
    private String password;
    private String role;

    public String getFullName() {
        return fullName;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getRole() {
        return role;
    }
}