package org.wecancodeit.moviesforyou.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.moviesforyou.models.Movie;

@Repository
public interface MovieRepository extends CrudRepository<Movie, Long> {

}
