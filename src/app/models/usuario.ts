import {UsuarioRol} from './usuario-rol';
import {EstadoUsuario} from './estado-usuario';
import {PlanTrabajo} from './plan-trabajo';

export class Usuario {
  idUsuario: string;
  nombreUsuario: string;
  correoUsuario: string;
  codigoUsuario: string;
  contrasenaUsuario: string;
  usuarioRol: UsuarioRol;
  estadoUsuario: EstadoUsuario;
  planesTrabajo: PlanTrabajo[];
}
