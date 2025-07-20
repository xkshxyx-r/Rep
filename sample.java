import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.SQLException;

public class MySQLConnect {
    public static void main(String[] args) {
        // MySQL connection details
        String url = "jdbc:mysql://localhost:3306/student";
        String username = "root";
        String password = "#Zombie03"; // Your actual password

        try {
            // Connect to database
            Connection conn = DriverManager.getConnection(url, username, password);
            System.out.println("✅ Connected to MySQL database!");

            // Create statement and execute query
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM student_details");

            // Process result set
            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                String grade = rs.getString("grade");

                System.out.println("ID: " + id + " | Name: " + name + " | Grade: " + grade);
            }

            // Clean up
            rs.close();
            stmt.close();
            conn.close();
        } catch (SQLException e) {
            System.out.println("❌ Database connection error:");
            e.printStackTrace();
        }
    }
}
