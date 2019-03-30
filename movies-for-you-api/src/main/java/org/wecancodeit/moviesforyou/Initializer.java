package org.wecancodeit.moviesforyou;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import org.wecancodeit.moviesforyou.models.Director;
import org.wecancodeit.moviesforyou.models.Movie;
import org.wecancodeit.moviesforyou.models.Cinematographer;
import org.wecancodeit.moviesforyou.repositories.DirectorRepository;
import org.wecancodeit.moviesforyou.repositories.MovieRepository;
import org.wecancodeit.moviesforyou.repositories.CinematographerRepository;

@Service
public class Initializer implements CommandLineRunner {
	
	@Resource
	DirectorRepository directorRepo;
	
	@Resource
	MovieRepository movieRepo;
	
	@Resource
	CinematographerRepository cinematographerRepo;

	@Override
	public void run(String... args) throws Exception {
		
		Director director1 = directorRepo.save(new Director("Stanley Kubrick"));
		Director director2 = directorRepo.save(new Director("Quentin Tarantino"));
		Director director3 = directorRepo.save(new Director("Alfred Hitchcock"));
		
		Cinematographer cinematographer1 = cinematographerRepo.save(new Cinematographer("Vivian Kubrick"));
		Cinematographer cinematographer2 = cinematographerRepo.save(new Cinematographer("Douglas Milsome"));
		Cinematographer cinematographer3 = cinematographerRepo.save(new Cinematographer("Geoffrey Unsworth"));
		Cinematographer cinematographer4 = cinematographerRepo.save(new Cinematographer("Andrzej Sekula"));
		Cinematographer cinematographer5 = cinematographerRepo.save(new Cinematographer("Robert Richardson"));
		Cinematographer cinematographer6 = cinematographerRepo.save(new Cinematographer("John L. Russell"));
		Cinematographer cinematographer7 = cinematographerRepo.save(new Cinematographer("Robert Burks"));
		
		Movie movie1 = movieRepo.save(new Movie("The Shining", 1980, director1, cinematographer1));
		Movie movie2 = movieRepo.save(new Movie("Full Metal Jacket", 1987, director1, cinematographer2));
		Movie movie3 = movieRepo.save(new Movie("2001: A Space Odyssey", 1968, director1, cinematographer3));
		
		Movie movie4 = movieRepo.save(new Movie("Pulp Fiction", 1994, director2, cinematographer4));
		Movie movie5 = movieRepo.save(new Movie("Django Unchained", 2012, director2, cinematographer5));
		Movie movie6 = movieRepo.save(new Movie("Kill Bill", 2003, director2, cinematographer5));
		
		Movie movie7 = movieRepo.save(new Movie("Psycho", 1960, director3, cinematographer6));
		Movie movie8 = movieRepo.save(new Movie("The Birds", 1963, director3, cinematographer7));
		Movie movie9 = movieRepo.save(new Movie("Rear Window", 1954, director3, cinematographer7));
		
	}

}
