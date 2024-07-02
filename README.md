
# Proyecto Angular: Peliculas

## Descripción
El proyecto "Peliculas" es una aplicación web desarrollada con Angular que permite a los usuarios buscar y visualizar información sobre películas utilizando la API de The Movie Database (TMDb). La aplicación está diseñada para ofrecer una experiencia de usuario intuitiva y rápida, aprovechando diversas características de Angular.

## Funcionalidades

### Búsqueda de Películas
Formulario de Búsqueda Reactiva: Utilicé el Formulario Reactivo de Angular para controlar y validar los datos del formulario de búsqueda de películas. Esto asegura que los datos ingresados por el usuario sean válidos antes de enviar la solicitud a la API.
### Servicios y Observables
Consumo de API con Observables: Implementé un servicio en Angular para manejar las solicitudes a la API de TMDb. Utilicé Observables para gestionar las respuestas asíncronas, lo que permite actualizar la interfaz de usuario en tiempo real a medida que se reciben los datos.
### Pipe Personalizado
Gestión de Imágenes: Creé un Pipe personalizado para controlar la visualización de imágenes de películas. Si una película no tiene una imagen disponible, se muestra una imagen por defecto, asegurando una experiencia visual consistente.
### Mejoras en el Rendimiento
Defer para Carga Diferida: Implementé la técnica de defer para cargar estilos mientras se esperan los datos de las películas desde la API. Esto mejora la experiencia del usuario al mostrar una interfaz de carga hasta que la información esté disponible.
### Interfaces TypeScript
Control de Tipos de Datos: Definí interfaces en TypeScript para controlar los objetos de Película que provienen de la API. Esto proporciona una estructura clara y fuerte tipificación, lo que facilita el desarrollo y mantenimiento del código.
### Principios de Reutilización de Componentes
Componentes Reutilizables: Diseñé los componentes de Angular siguiendo los principios de reutilización. Esto permite que los componentes se puedan usar en diferentes partes de la aplicación sin necesidad de duplicar código, mejorando la mantenibilidad y escalabilidad del proyecto.
### Estilo y Diseño Responsivo
Bootstrap: Utilicé Bootstrap para estilizar la aplicación, proporcionando un diseño moderno y profesional. Aproveché las clases y componentes de Bootstrap para crear una interfaz de usuario coherente y atractiva.
Diseño Responsivo: Apliqué técnicas de diseño responsivo para asegurar que la aplicación se vea y funcione bien en una variedad de dispositivos y tamaños de pantalla. Esto garantiza una experiencia de usuario óptima tanto en dispositivos móviles como en pantallas de escritorio.
### Tecnologías Utilizadas
Angular: Framework principal para la construcción de la aplicación.
RxJS: Para el manejo de Observables y programación reactiva.
Angular Reactive Forms: Para el manejo de formularios reactivos.
TypeScript: Para la definición de interfaces y fuerte tipificación.
HTML y CSS: Para la estructura y el diseño de la interfaz de usuario.
Bootstrap: Para el diseño y estilo de la aplicación, asegurando un diseño moderno y responsivo.
## Conclusión
El proyecto "Peliculas" demuestra un uso efectivo de Angular y sus características avanzadas para construir una aplicación web robusta y de alto rendimiento. La implementación de formularios reactivos, servicios basados en Observables, componentes reutilizables, Bootstrap para estilos y diseño responsivo asegura una experiencia de usuario fluida y eficiente.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
