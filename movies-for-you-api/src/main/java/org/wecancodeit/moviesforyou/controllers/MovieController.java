package org.wecancodeit.moviesforyou.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.moviesforyou.models.Movie;
import org.wecancodeit.moviesforyou.repositories.MovieRepository;
@CrossOrigin
@RestController
public class MovieController {

	@Resource
	MovieRepository movieRepo;
	
	@GetMapping("/movies")
	public Collection<Movie> getMovies() {
		return (Collection<Movie>) movieRepo.findAll();
	}
	
	@GetMapping("/movies/{id}")
	public Movie viewSingleMovie(@PathVariable Long id) {
		return movieRepo.findById(id).get();
	}
}
