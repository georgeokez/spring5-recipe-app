package com.george.dev.restapi.service;

import com.george.dev.restapi.model.User;
import com.george.dev.restapi.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by George on 20/11/2018
 */

@Service
public class UserService {

    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> findAllUsers(){
        return userRepository.findAll();
    }

    public User findUserById(long id){
        return userRepository.findById(id);
    }

    public User findUserByFirstname(String firstName){
        return userRepository.findByFirstname(firstName);
    }

    public void createUser(User user){
        userRepository.save(user);
    }

    public boolean isUserExist(String firstName){
        User user = userRepository.findByFirstname(firstName);
        return (user == null) ? false : true;
    }

    public void updateUser(User user){
        userRepository.save(user);
    }

    public void deleteUserById(long id){
        userRepository.deleteById(id);
    }

    public void deleteUserByFirstname(String firstName){
        userRepository.deleteUserByFirstname(firstName);
    }

    public void deleteAllUsers() {
        userRepository.deleteAll();
    }
}
