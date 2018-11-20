package com.george.dev.restapi.repository;

import com.george.dev.restapi.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by George on 20/11/2018
 */

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    List<User> findAll();

    User findById(long id);

    User findByFirstname(String fname);

    void deleteUserByFirstname(String fname);

}
