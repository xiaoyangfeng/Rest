package com.wiley.beginningspring.ch11;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by blue on 2016/12/9.
 */
@Controller
public class HomeController {

    @RequestMapping("/")
    public String home(){
        return "index.html";
    }
}
