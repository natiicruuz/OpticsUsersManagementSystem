# Lenguaje Ubicuo: Sistema de Gestión de Óptica
## 1. Pacientes y Profesionales:
**Paciente**: Persona que recibe un servicio de atención visual. Tiene una ficha clínica donde se registran sus datos personales y su historial clínico, incluyendo datos de optometría y contactología.
**Profesional**: Persona encargada de atender al paciente en la óptica. Puede ser un optometrista u otro profesional de la salud visual. Es responsable de registrar los datos clínicos del paciente y gestionar encargos y ventas.
**Fichas Clínicas**: Conjunto de datos de salud visual del paciente, que incluye tanto la información de optometría como de contactología. Cada paciente tiene una ficha clínica asociada.

## 2. Datos Clínicos:
**Optometría**: Parte del examen clínico que mide la capacidad visual del paciente. Incluye valores de RX (graduación), DNP (Distancia Nasopupilar), PIO (Presión Intraocular), y otros parámetros como la Agudeza Visual (AV).
- **RX**: Refracción del ojo, que incluye miopía, hipermetropía y astigmatismo.
- **DNP**: Distancia entre el centro de las pupilas. Es un valor crucial para la personalización de gafas.
- **PIO**: Presión intraocular, usada para detectar glaucoma.

**Queratometría**: Mide la curvatura de la córnea, importante en la elección de lentes de contacto.

**Contactología**: Datos relacionados con la adaptación de lentes de contacto del paciente. Incluye la RX específica para lentes de contacto, además de la queratometría y la evaluación de la adaptación de los lentes.

## 3. Encargos, Pedidos y Logística:
**Encargo**: Solicitud que un paciente hace en la óptica para adquirir productos como gafas o lentes de contacto. El encargo es creado por el profesional basado en las necesidades visuales del paciente, y puede incluir especificaciones de los productos y los cristales necesarios.

**Pedido**: Solicitud que se hace a un proveedor para obtener productos necesarios para un encargo. Los pedidos son generados cuando un encargo requiere productos que no están en inventario.

**Venta Directa**: Proceso de compra de un producto sin estar asociado a un encargo. Ocurre cuando un cliente compra productos sin necesitar exámenes clínicos (por ejemplo, gafas de sol o accesorios).

## 4. Catálogo y Productos:
**Catálogo**: Conjunto de productos disponibles en la óptica. Estos productos pueden ser gafas, lentes de contacto, cristales con graduación, etc. El catálogo se consulta tanto para encargos como para ventas directas.

**Cristales**: Lentes ópticas que se ajustan a la RX del paciente. Pueden ser simples, bifocales o progresivos.

**Lentes de Contacto**: Producto de la óptica que se adapta a la prescripción clínica del paciente para corregir su visión sin el uso de gafas.

## 5. Procesos Financieros y Administrativos:
**Venta**: Transacción financiera que ocurre cuando un encargo es completado o cuando se realiza una venta directa. Incluye el cobro por los productos adquiridos por el paciente.

**Facturación**: Proceso administrativo que registra la transacción y genera un documento (factura) que resume los productos adquiridos y los costos asociados.

**Inventario**: Conjunto de productos físicos disponibles en la óptica. El inventario es consultado cuando se genera un encargo o una venta directa, y se actualiza cuando se realiza un pedido a un proveedor o una venta.

## 6. Eventos del Sistema:
**Encargo Creado**: Evento que ocurre cuando un profesional crea un encargo para un paciente. Indica que se ha definido un conjunto de productos que el paciente necesita.

**Pedido Generado**: Evento que ocurre cuando se solicita a un proveedor productos que no están en inventario y que son necesarios para completar un encargo.

**Venta Procesada**: Evento que se dispara cuando se completa una transacción, ya sea por un encargo o por una venta directa.

**Stock Actualizado**: Evento que indica que el inventario de la óptica ha cambiado, ya sea por la recepción de un pedido o por la venta de productos.

### Ejemplos de Uso del Lenguaje Ubicuo:
- Un profesional crea un encargo para un paciente, seleccionando del catálogo las gafas con los cristales personalizados según la RX registrada en la ficha clínica de optometría.
- Si los cristales seleccionados no están disponibles en el inventario, el sistema genera un pedido al proveedor y marca el encargo como pendiente hasta que llegue el producto.
- Una vez el pedido se completa y se actualiza el stock, el profesional puede finalizar la venta y procesar la facturación correspondiente.
