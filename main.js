class Cl_asesoria {
   constructor(c, t, h) {
      this.codigo = c;
      this.tipoAsesoria = t;
      this.cntHoras = h;
   }
   descuento() {
      if (this.cntHoras < 5) return 0;
      else if (this.cntHoras < 10) return 0.05;
      else if (this.cntHoras < 15) return 0.08;
      else return 0.1;
   }
   montoDescuento() {
      return this.totalBruto() * this.descuento();
   }
   totalBruto() {
      return (
         this.cntHoras *
         (this.tipoAsesoria === "A"
            ? 75
            : this.tipoAsesoria === "B"
            ? 55
            : this.tipoAsesoria === "C"
            ? 30
            : 20)
      );
   }
   totalNeto() {
      return this.totalBruto() - this.montoDescuento();
   }
}

class Cl_compania {
   constructor() {
      this.acTotalNeto =
         this.cntTipoA =
         this.cntTipoB =
         this.acSinDescuento =
            0;
   }
   procesarAsesoria(a) {
      this.acTotalNeto += a.totalNeto();
      if (a.tipoAsesoria === "A") this.cntTipoA++;
      if (a.tipoAsesoria === "B") this.cntTipoB++;
      if (a.descuento() === 0) this.acSinDescuento += a.totalNeto();
   }
   totalRecibidoPorAsesorias() {
      return this.acTotalNeto;
   }
   masSolicitadoEntreAyB() {
      if (this.cntTipoA > this.cntTipoB) return "Más solicitado el tipo A";
      else if (this.cntTipoB > this.cntTipoA) return "Más solicitado el tipo B";
      else return "Ambos se solicitaron por IGUAL";
   }
   pagadoPorServiciosSinDescuento() {
      return this.acSinDescuento;
   }
}

let asesoria1 = new Cl_asesoria(555, "B", 8);
let asesoria2 = new Cl_asesoria(111, "C", 4);
let asesoria3 = new Cl_asesoria(333, "D", 12);
let asesoria4 = new Cl_asesoria(222, "B", 10);
let asesoria5 = new Cl_asesoria(444, "A", 3);

let compania = new Cl_compania();
compania.procesarAsesoria(asesoria1);
compania.procesarAsesoria(asesoria2);
compania.procesarAsesoria(asesoria3);
compania.procesarAsesoria(asesoria4);
compania.procesarAsesoria(asesoria5);

let salida = document.getElementById("app");
salida.innerHTML = "RESULTADOS";
salida.innerHTML += `<br>CLIENTE 1: Descuento=${asesoria1.montoDescuento()} - total neto=${asesoria1.totalNeto()}`;
salida.innerHTML += `<br>CLIENTE 2: Descuento=${asesoria2.montoDescuento()} - total neto=${asesoria2.totalNeto()}`;
salida.innerHTML += `<br>CLIENTE 3: Descuento=${asesoria3.montoDescuento()} - total neto=${asesoria3.totalNeto()}`;
salida.innerHTML += `<br>CLIENTE 4: Descuento=${asesoria4.montoDescuento()} - total neto=${asesoria4.totalNeto()}`;
salida.innerHTML += `<br>CLIENTE 5: Descuento=${asesoria5.montoDescuento()} - total neto=${asesoria5.totalNeto()}`;
salida.innerHTML += `<br>Total monto percibido por las asesorías: ${compania.totalRecibidoPorAsesorias()}`;
salida.innerHTML += `<br>Entre el tipo de asesoría A y asesoría B la más solicitada ${compania.masSolicitadoEntreAyB()}`;
salida.innerHTML += `<br>Total neto pagado por servicios que no obtuvieron descuentos ${compania.pagadoPorServiciosSinDescuento()}`;
