package grupo7Backend.C4G.Grupo7.repositories;

import grupo7Backend.C4G.Grupo7.entities.Evento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component("eventoDAO")
public interface EventoDAO extends JpaRepository<Evento,Long> {

}
