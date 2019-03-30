package org.wecancodeit.moviesforyou.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.moviesforyou.models.Director;
import org.wecancodeit.moviesforyou.repositories.DirectorRepository;
import org.wecancodeit.moviesforyou.repositories.MovieRepository;
@CrossOrigin
@RestController
public class DirectorController {
	
	@Resource
	MovieRepository movieRepo;

	@Resource
	DirectorRepository directorRepo;
	
	@GetMapping("/directors")
	public Collection<Director> getDirectors() {
		return (Collection<Director>) directorRepo.findAll();
	}
	
	@GetMapping("/directors/{id}")
	public Director viewSingleDirector(@PathVariable Long id) {
		return directorRepo.findById(id).get();
	}

}

