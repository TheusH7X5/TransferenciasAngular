import { Component, Output, EventEmitter } from '@angular/core';
import { TransferenciaService } from './../services/transferencia.service';
import { Transferencia } from './../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('Solicitada nova transferencia');
    // console.log('Valor: ', this.valor);
    // console.log('Destino: ', this.destino);
    const valorEmitido: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionar(valorEmitido).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limpar();
        this.router.navigateByUrl('extrato')
      },
      (error) => {
        console.log(error);
      }
    );
  }

  limpar() {
    this.valor = 0;
    this.destino = 0;
  }
}
