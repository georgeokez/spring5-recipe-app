package com.george.dev.clientui.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by George on 20/11/2018
 */

@Controller
public class HomeController {

    @RequestMapping({"/","/index","/home"})
    public String indexPage(){
        return "index";
    }
}
