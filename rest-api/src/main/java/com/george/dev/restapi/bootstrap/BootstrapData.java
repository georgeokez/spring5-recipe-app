package com.george.dev.restapi.bootstrap;

import com.george.dev.restapi.model.User;
import com.george.dev.restapi.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * Created by George on 20/11/2018
 */

@Component
public class BootstrapData implements CommandLineRunner {

    private UserService userService;

    public BootstrapData(UserService userService) {
        this.userService = userService;
    }

    @Override
    public void run(String... args) throws Exception {

        User user1 = new User();
        user1.setFirstname("George");
        user1.setLastname("Okez");
        user1.setAge(30);
        user1.setEmail("georgeokez@gmail.com");

        userService.createUser(user1);

        User user2 = new User();
        user2.setFirstname("Tobi");
        user2.setLastname("Abram");
        user2.setAge(28);
        user2.setEmail("tobiabram@gmail.com");

        userService.createUser(user2);

        User user3 = new User();
        user3.setFirstname("Damola");
        user3.setLastname("Asiyanbola");
        user3.setAge(26);
        user3.setEmail("damolaDamz@gmail.com");

        userService.createUser(user3);


    }
}
