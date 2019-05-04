package grupo7Backend.C4G.Grupo7.controllers;


import grupo7Backend.C4G.Grupo7.entities.Evento;
import grupo7Backend.C4G.Grupo7.entities.Postulante;
import grupo7Backend.C4G.Grupo7.utils.Buscador;
import grupo7Backend.C4G.Grupo7.services.PostulanteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
public class PostulanteController {

    private final PostulanteService postulanteService;

    @Autowired
    public PostulanteController(@Qualifier("postulanteService") PostulanteService postulanteService) {
        this.postulanteService = postulanteService;
    }

    @GetMapping("/postulante/{id}/ver")
    public Postulante ver(@PathVariable("id") Long id){
        return this.postulanteService.recuperar(id);
    }

    @PutMapping("/postulante/crear")
    public Postulante crear(@RequestBody @Valid Postulante unPostulante){
        return postulanteService.crear(unPostulante);
    }

    @GetMapping("/postulantes")
    public List<Postulante> all(){
        return postulanteService.recuperarTodo();
    }

    @PostMapping("/postulantes")
    public List<Postulante> recuperar(@RequestBody @Valid Buscador unBuscador){
        return postulanteService.recuperarSegunFiltro(unBuscador);
    }

    @PostMapping("/user/edit")
    public Postulante editar(@RequestBody @Valid Postulante unPostulante){
        return postulanteService.editar(unPostulante);
    }

    @GetMapping("postulante/masVisitado")
    public Postulante masVisto(){
        return postulanteService.masVisitado();
    }

    @PostMapping("/postulante/{id}/evento/agregar")
    public Postulante add(@PathVariable("id") Long id , @RequestBody @Valid Evento unEvento){
        return postulanteService.add(id,unEvento);
    }

}
