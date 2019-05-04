package grupo7Backend.C4G.Grupo7.repositories;


import grupo7Backend.C4G.Grupo7.entities.Postulante;
import grupo7Backend.C4G.Grupo7.utils.Oficio;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component("postulanteDAO")
public interface PostulanteDAO extends JpaRepository<Postulante, Long> {
    List<Postulante> findByLocalidadProvinciaAndOficio(String provincia, Oficio oficio);
    Page<Postulante> findByLocalidadProvinciaAndOficio(Pageable pageable,String provincia, Oficio oficio);

}
