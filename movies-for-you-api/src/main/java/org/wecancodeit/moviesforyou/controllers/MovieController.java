package org.wecancodeit.moviesforyou.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.moviesforyou.models.Director;
import org.wecancodeit.moviesforyou.models.Movie;
import org.wecancodeit.moviesforyou.repositories.CinematographerRepository;
import org.wecancodeit.moviesforyou.repositories.DirectorRepository;
import org.wecancodeit.moviesforyou.repositories.MovieRepository;

@CrossOrigin
@RestController
public class MovieController {

	@Resource
	MovieRepository movieRepo;
	
	@Resource
	DirectorRepository directorRepo;
	
	@Resource
	CinematographerRepository cinematographerRepo;
	
	@GetMapping("/movies")
	public Collection<Movie> getMovies() {
		return (Collection<Movie>) movieRepo.findAll();
	}
	
	@GetMapping("/movies/{id}")
	public Movie viewSingleMovie(@PathVariable Long id) {
		return movieRepo.findById(id).get();
	}
	
//	@PostMapping("/movies/add")
//	public Collection<Movie> addMovieToMovies(@PathVariable Long id, @RequestBody String body) throws JSONException {
//	JSONObject json = new JSONObject(body);
//	String movieName = json.getString("movieName");
//	String imageURL = json.getString("imageURL");
//	int year = json.getInt("year");
//	Class<? extends JSONObject> director = json.getClass();
//	
//	Director directorToAddTo = directorRepo.findById(id).get();
//	movieRepo.save(new Movie(movieName, imageURL, year, directorToAddTo, null));
//	directorToAddTo = directorRepo.findById(id).get();
//	return directorToAddTo;
//	}
	
//	@PostMapping("/movies/add/{id}")
//	public Director addMovie(@PathVariable Long id, @RequestBody String body) throws JSONException {
//	JSONObject json = new JSONObject(body);
//	String movieName = json.getString("movieName");
//	String imageURL = json.getString("imageURL");
//	int year = json.getInt("year");
//	Director directorToAddTo = directorRepo.findById(id).get();
//	movieRepo.save(new Movie(movieName, imageURL, year, directorToAddTo, null));
//	directorToAddTo = directorRepo.findById(id).get();
//	return directorToAddTo;
//	}

}
