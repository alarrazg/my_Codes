import unittest

class Asiento:
    """Representa un asiento en una sala de cine."""
    def __init__(self, numero, fila):
        self.__numero = numero
        self.__fila = fila
        self.__reservado = False
        self.__precio_base = 10

    # Getters y setters
    @property
    def numero(self):
        return self.__numero

    @property
    def fila(self):
        return self.__fila

    @property
    def reservado(self):
        return self.__reservado

    @property
    def precio_base(self):
        return self.__precio_base

    @precio_base.setter
    def precio_base(self, valor):
        if valor >= 0:
            self.__precio_base = valor
        else:
            raise ValueError("El precio base debe ser positivo")

class SalaCine:
    """Administra una lista de asientos y permite las siguientes operaciones."""
    def __init__(self):
        self.__asientos = []

    def agregar_asiento(self, asiento):
        """Agrega un asiento a la sala."""
        if asiento not in self.__asientos:
            self.__asientos.append(asiento)
        else:
            raise ValueError("El asiento ya existe")

    def reservar_asiento(self, numero, fila, edad, dia):
        """Reserva un asiento y calcula el precio."""
        asiento = self._buscar_asiento(numero, fila)
        if asiento:
            if not asiento.reservado:
                precio = self._calcular_precio(asiento, edad, dia)
                asiento.reservado = True
                print(f"Asiento reservado. Precio: ${precio:.2f}")
            else:
                raise ValueError("El asiento ya está reservado")
        else:
            raise ValueError("Asiento no encontrado")

    def cancelar_reserva(self, numero, fila):
        """Cancela la reserva de un asiento."""
        asiento = self._buscar_asiento(numero, fila)
        if asiento and asiento.reservado:
            asiento.reservado = False
            print("Reserva cancelada.")
        else:
            raise ValueError("No se puede cancelar la reserva.")

    def mostrar_asientos(self):
        """Muestra todos los asientos y su estado."""
        for asiento in self.__asientos:
            print(f"Asiento {asiento.numero}{asiento.fila}: {'Reservado' if asiento.reservado else 'Disponible'}")

    def _buscar_asiento(self, numero, fila):
        """Busca un asiento por número y fila."""
        for asiento in self.__asientos:
            if asiento.numero == numero and asiento.fila == fila:
                return asiento
        return None

    def _calcular_precio(self, asiento, edad, dia):
        """Calcula el precio de un asiento aplicando descuentos."""
        precio = asiento.precio_base
        if dia.lower() == 'miercoles':
            precio *= 0.8
        if edad >= 65:
            precio *= 0.7
        return precio

# Pruebas unitarias
class TestSalaCine(unittest.TestCase):
    def setUp(self):
        self.sala = SalaCine()
        self.asiento = Asiento(1, 'A')
        self.sala.agregar_asiento(self.asiento)

    def test_reservar_asiento(self):
        self.sala.reservar_asiento(1, 'A', 70, 'miercoles')
        self.assertTrue(self.asiento.reservado)

    # ... (agregar más pruebas para otros métodos)

if __name__ == '__main__':
    unittest.main()