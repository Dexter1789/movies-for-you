package org.wecancodeit.moviesforyou.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.moviesforyou.models.Director;

@Repository
public interface DirectorRepository extends CrudRepository<Director, Long> {

}
