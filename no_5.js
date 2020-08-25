class Lingkaran {
    constructor (phi, r) {
        this.jari_jari = r;
        this.phi = phi;
    };

    luas = () => {
        return this.phi * (this.jari_jari * this.jari_jari)
    };

    keliling = () => {
        return 2 * this.phi * this.jari_jari
    };
};

class Tabung extends Lingkaran {
    constructor (phi, r, t) {
        super (phi, r);
        this.tinggi = t;
    }

    volume = () => {
        return this.phi * (this.jari_jari * this.jari_jari) * this.tinggi
    };

    luasPermukaan = () => {
        return this.phi * this.jari_jari * (this.jari_jari * 2 * this.tinggi)
    };

    luasSelimut = () => {
        return 2 * this.phi * this.jari_jari * this.tinggi
    };
};

class Kerucut extends Lingkaran {
    constructor (phi, r, t) {
        super (phi, r);
        this.tinggi = t;
    };

    volume = () => {
        return (1/3) * this.phi * (this.jari_jari * this.jari_jari) * this.tinggi
    };

    luasPermukaan = () => {
        return this.phi * this.jari_jari * (this.jari_jari * (Math.sqrt((this.jari_jari * this.jari_jari) + (this.tinggi * this.tinggi))))
    };

    luasSelimut = () => {
        return this.phi * this.jari_jari * (Math.sqrt((this.jari_jari * this.jari_jari) * (this.tinggi * this.tinggi)))
    };
};

class Bola extends Lingkaran {
    constructor (phi, r) {
        super (phi, r);
    };

    volume = () => {
        return (4/3) * this.phi * (this.jari_jari ** 3)
    };

    luasPermukaan = () => {
        return 4 * this.phi * (this.jari_jari * this.jari_jari)
    };
};

console.log ("==================================================================");
let gelas = new Tabung(3.14, 7.5, 50)
console.log ("GELAS");
console.log ("r                                                 = 7.5 cm");
console.log ("t                                                 = 50 cm");
console.log ("Volume                                            = " + gelas.volume() + "cm3");
console.log ("Luas permukaan                                    = " + gelas.luasPermukaan() + "cm2");
console.log ("Luas selimut                                      = " + gelas.luasSelimut() + "cm2");
console.log ("==================================================================");
let traffic_cone = new Kerucut (3.14, 10, 40)
console.log ("TRAFFIC CONE");
console.log ("r                                                 = 10 cm");
console.log ("t                                                 = 40 cm");
console.log ("Volume                                            = " + traffic_cone.volume() + "cm3");
console.log ("Luas permukaan                                    = " + traffic_cone.luasPermukaan() + "cm2");
console.log ("Luas selimut                                      = " + traffic_cone.luasSelimut() + "cm2");
console.log ("==================================================================");
let bola = new Bola (3.14, 15)
console.log ("BOLA");
console.log ("r                                                 = 15 cm");
console.log ("Volume                                            = " + bola.volume() + "cm3");
console.log ("Luas permukaan                                    = " + bola.luasPermukaan() + "cm2");
console.log ("==================================================================");