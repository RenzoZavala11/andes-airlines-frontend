# Andes Airlines - Sistema de Check-in

Sistema de visualización y gestión de asientos para el proceso de check-in de Andes Airlines. Esta aplicación web permite visualizar el mapa de asientos de diferentes aviones y gestionar el proceso de check-in de pasajeros.

## Características

- Visualización interactiva del mapa de asientos
- Soporte para múltiples modelos de aviones
- Gestión de check-in de pasajeros
- Identificación de grupos de viaje
- Marcado especial para asientos con menores
- Sistema de reset para volver al estado inicial
- Visualización de asientos pre-asignados

## Modelos de Aviones Soportados

### AirNova-660
- Capacidad: 160 pasajeros
- Categorías:
  - Primera Clase
  - Económica Premium
  - Económica

### AirMax-720neo
- Capacidad: 155 pasajeros
- Categorías:
  - Primera Clase
  - Económica Premium
  - Económica

## Características del Mapa de Asientos

- **Asientos Pre-ocupados**: Visualización de asientos reservados antes del check-in
- **Estado de Asientos**: 
  - Libre: Disponible para selección
  - Ocupado: Ya asignado a un pasajero
  - Con Menor: Asiento asignado a un pasajero menor de edad
- **Información de Pasajeros**: 
  - Nombre
  - DNI
  - Edad
  - País
  - Número de Reserva
  - Grupo de viaje (si aplica)

## Uso

1. Selecciona el número de vuelo del menú desplegable
2. Haz clic en "Simular check-in" para cargar los pasajeros
3. Selecciona cualquier asiento para ver los detalles del pasajero
4. Usa el botón "Restablecer" para volver al estado inicial

## Desarrollo

El proyecto está construido usando:
- HTML5
- CSS3 (con diseño responsivo)
- JavaScript (Vanilla)
- Diseño modular para fácil mantenimiento y extensibilidad

## API

La aplicación se conecta a un servidor externo para obtener la información de los pasajeros:
```
https://andes-airlines-checkin-production.up.railway.app/flights/{flightId}/passengers
```

## Mejores Prácticas Implementadas

- Manejo de estados consistente
- Validaciones de entrada
- Mensajes de error informativos
- Interfaz intuitiva y fácil de usar
- Código mantenible y bien documentado