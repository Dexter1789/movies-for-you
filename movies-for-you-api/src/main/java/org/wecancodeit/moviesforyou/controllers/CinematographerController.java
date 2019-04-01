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
import org.wecancodeit.moviesforyou.models.Cinematographer;
import org.wecancodeit.moviesforyou.models.Director;
import org.wecancodeit.moviesforyou.repositories.CinematographerRepository;
import org.wecancodeit.moviesforyou.repositories.DirectorRepository;
import org.wecancodeit.moviesforyou.repositories.MovieRepository;

@CrossOrigin
@RestController
public class CinematographerController {
	
	@Resource
	MovieRepository movieRepo;

	@Resource
	CinematographerRepository cinematographerRepo;
	
	@Resource
	DirectorRepository directorRepo;
	
	@GetMapping("/cinematographers")
	public Collection<Cinematographer> getCinematographers() {
		return (Collection<Cinematographer>) cinematographerRepo.findAll();
	}
	
	@GetMapping("/cinematographers/{id}")
	public Cinematographer viewSingleCinematographer(@PathVariable Long id) {
		return cinematographerRepo.findById(id).get();
	}
	
	@PostMapping("/cinematographers/add/{id}")
	public Director addCinematographer(@PathVariable Long id, @RequestBody String body) throws JSONException {
		JSONObject json = new JSONObject(body);
		String cinematographerName = json.getString("cinematographerName");
		Director directorToAddTo = directorRepo.findById(id).get();
		cinematographerRepo.save(new Cinematographer(cinematographerName, directorToAddTo));
		directorToAddTo = directorRepo.findById(id).get();
		return directorToAddTo;
	}
	
}
