package grupo7Backend.C4G.Grupo7.controllers;


import grupo7Backend.C4G.Grupo7.entities.Postulante;
import grupo7Backend.C4G.Grupo7.services.PostulanteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
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

    @PutMapping("/postulante/crear")
    public Postulante crear(@RequestBody @Valid Postulante unPostulante){
        return postulanteService.crear(unPostulante);
    }

    @GetMapping("/postulantes")
    public List<Postulante> all(){
        return postulanteService.recuperarTodo();
    }

}
