import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadjsService {
  private scripts: string[] = [];

  constructor() { }

  load(scriptNames: string[]): Promise<void[]> {
    const promises: Promise<void>[] = [];

    scriptNames.forEach((scriptName) => {
      if (!this.scripts.includes(scriptName)) {
        this.scripts.push(scriptName);

        const promise = new Promise<void>((resolve, reject) => {
          const scriptElement = document.createElement('script');
          scriptElement.src = 'assets/js/' + scriptName + '.js'; // Ruta ajustada

          scriptElement.onload = () => {
            resolve();
          };

          scriptElement.onerror = () => {
            reject(new Error('Error al cargar el script: ' + scriptName));
          };

          document.body.appendChild(scriptElement);

        });

        promises.push(promise);
      }
    });

    return Promise.all(promises);
  }
}
