package grupo7Backend.C4G.Grupo7.repositories;


import grupo7Backend.C4G.Grupo7.entities.Postulante;
import grupo7Backend.C4G.Grupo7.utils.Oficio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;

import java.util.List;

@Component("postulanteDAO")
public interface PostulanteDAO extends JpaRepository<Postulante, Long> {
    List<Postulante> findByLocalidadProvinciaAndOficio(String provincia, Oficio oficio);

    @Query(value = "select * from Postulante p order by p.visitas desc limit 1",nativeQuery = true)
    Postulante masVisitado();
}
