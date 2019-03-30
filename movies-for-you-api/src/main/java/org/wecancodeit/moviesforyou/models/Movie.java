package org.wecancodeit.moviesforyou.models;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
public class Movie {
    
    @Id
    @GeneratedValue
    private Long id;
    private String movieName;
    @Lob
    private String imageURL;
    private int year;
    @ManyToOne
    @JsonIgnore
    private Director director;
    @ManyToOne
    @JsonIgnore
    private Cinematographer cinematographer;
    
    public Movie(String movieName, String imageURL, int year, Director director, Cinematographer cinematographer) {
        this.movieName = movieName;
        this.imageURL = imageURL;
        this.year = year;
        this.director = director;
        this.cinematographer = cinematographer;
    }
    
    public Movie() {}
    public Long getId() {
        return id;
    }
    public String getMovieName() {
        return movieName;
    }
    public String getImageURL() {
        return imageURL;
    }
    
    public int getYear() {
        return year;
    }
    
    public Director getDirector() {
        return director;
    }
    
    public Cinematographer getCinematographer() {
        return cinematographer;
    }
    
}
