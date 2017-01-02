package com.wiley.beginningspring.ch11;

/**
 * Created by blue on 2016/12/27.
 */
public class User {
    private int id; private String name;
    public User() {}
    public User(int id, String name) { this.id = id;
        this.name = name; }
    public int getId() { return id;
    }
    public String getName() { return name;
    }
}
