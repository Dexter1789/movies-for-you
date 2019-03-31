package org.wecancodeit.moviesforyou.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.moviesforyou.models.Cinematographer;
import org.wecancodeit.moviesforyou.repositories.CinematographerRepository;
import org.wecancodeit.moviesforyou.repositories.MovieRepository;

@CrossOrigin
@RestController
public class CinematographerController {
	
	@Resource
	MovieRepository movieRepo;

	@Resource
	CinematographerRepository cinematographerRepo;
	
	@GetMapping("/cinematographers")
	public Collection<Cinematographer> getCinematographers() {
		return (Collection<Cinematographer>) cinematographerRepo.findAll();
	}
	
	@GetMapping("/cinematographers/{id}")
	public Cinematographer viewSingleCinematographer(@PathVariable Long id) {
		return cinematographerRepo.findById(id).get();
	}
	
	
}
