
export enum EstadoEnum {
  ACTIVO = "ACTIVO",
  INACTIVO = "INACTIVO"
}

export enum EtiquetaEnum {
  COMPLETADO = 'COMPLETADO',
  EN_PROGRESO = 'EN_PROGRESO',
  RECHAZO = 'RECHAZO',
  PENDIENTE = 'PENDIENTE'
}

export enum CategoriaEnum {
  TIPO_1 = 'TIPO1',
  TIPO_2 = 'TIPO2'
}

export interface DataTemplate{
  id?: string
  nombre: string
  fecha: Date
  descripcion: string
  fechaActualizacion?: Date
  autor: string
  version?: number
  categoria: CategoriaEnum
  activo?: EstadoEnum
  etiquetas: EtiquetaEnum
}
