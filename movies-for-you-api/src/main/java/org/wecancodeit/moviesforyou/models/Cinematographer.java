package org.wecancodeit.moviesforyou.models;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Cinematographer {

	@Id
	@GeneratedValue
	private Long id;
	private String cinematographerName;
	@OneToMany(mappedBy="cinematographer")
	private Collection<Movie> movies;
	
	public Cinematographer(String cinematographerName) {
		this.cinematographerName = cinematographerName;
	}
	
	public Cinematographer() {}

	public Long getId() {
		return id;
	}

	public String getCinematographerName() {
		return cinematographerName;
	}

	public Collection<Movie> getMovies() {
		return movies;
	}
	
}
