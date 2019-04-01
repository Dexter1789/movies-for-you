package org.wecancodeit.moviesforyou.models;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Cinematographer {

	@Id
	@GeneratedValue
	private Long id;
	private String cinematographerName;
	@JsonIgnore
	@ManyToOne
	private Director director;
	@OneToMany(mappedBy="cinematographer")
	private Collection<Movie> movies;
	
	public Cinematographer(String cinematographerName, Director director) {
		this.cinematographerName = cinematographerName;
		this.director = director;
	}
	
	public Cinematographer() {}

	public Long getId() {
		return id;
	}

	public String getCinematographerName() {
		return cinematographerName;
	}
	
	public Director getDirector() {
		return director;
	}

	public Collection<Movie> getMovies() {
		return movies;
	}
	
}
