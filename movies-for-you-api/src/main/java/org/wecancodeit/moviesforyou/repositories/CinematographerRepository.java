package org.wecancodeit.moviesforyou.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.moviesforyou.models.Cinematographer;

@Repository
public interface CinematographerRepository extends CrudRepository<Cinematographer, Long> {

}
