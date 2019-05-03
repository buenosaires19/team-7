package grupo7Backend.C4G.Grupo7.repositories;


import grupo7Backend.C4G.Grupo7.entities.Postulante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component("postulanteDAO")
public interface PostulanteDAO extends JpaRepository<Postulante, Long> {
}
