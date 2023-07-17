import orderService from "../src/services/order.service";
import Order from "../src/models/Order";

jest.mock("../src/models/Order", () => ({
  create: jest.fn(),
  find: jest.fn(),
  findOneAndDelete: jest.fn(),
  findById: jest.fn(),
}));

describe("createService", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
  it("Criar pedido", async () => {
    const mockOrder = {};

    Order.create.mockResolvedValue(mockOrder);

    const result = await orderService.createService(mockOrder);

    expect(Order.create).toHaveBeenCalledTimes(1);
    expect(Order.create).toHaveBeenCalledWith(mockOrder);
    expect(result).toEqual(mockOrder);
  });

  it("Erro caso a criação do pedido falhe", async () => {
    const mockOrder = {};
    const mockError = new Error("Falha ao criar pedido");

    Order.create.mockRejectedValue(mockError);

    await expect(orderService.createService(mockOrder)).rejects.toThrowError(mockError);
  });
});

describe('findAllService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("retornar todos os pedidos com nomes de clientes classificados por dataPedido em ordem decrescente", async () => {
    const mockOrders = [
      { _id: 1, cliente: { nome: 'Bruna Alencar' }, dataPedido: '2023-07-01' },
      { _id: 2, cliente: { nome: 'Rafael Silva' }, dataPedido: '2023-07-02' },
      { _id: 3, cliente: { nome: 'Pietra Soares' }, dataPedido: '2023-07-03' },
    ];

    Order.find.mockReturnValue({
      populate: jest.fn().mockReturnValue({
        sort: jest.fn().mockResolvedValueOnce(mockOrders),
      }),
    });

    const expectedResult = mockOrders;

    const result = await orderService.findAllService();

    expect(Order.find).toHaveBeenCalled();
    expect(Order.find().populate).toHaveBeenCalledWith('cliente', 'nome');
    expect(Order.find().populate().sort).toHaveBeenCalledWith({ 'dataPedido': -1 });
    expect(result).toEqual(expectedResult);
  });
});

describe("deleteService", () => {
  it("Deletar em ordem", async () => {
    const mockedOrder = { _id: 'order_id'}; 

    Order.findOneAndDelete.mockResolvedValueOnce(mockedOrder);

    const id = 'order_id'; 

    const result = await orderService.deleteService(id);

    expect(result).toEqual(mockedOrder);

    expect(Order.findOneAndDelete).toHaveBeenCalledWith({ _id: id });
  });
});

describe("findByIdService", () => {
  it("deve encontrar um pedido por ID e preencher os campos relacionados", async () => {
    const mockedOrder = { _id: 'order_id'}; 

    Order.findById.mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockResolvedValueOnce(mockedOrder),
      }),
    });

    const id = 'order_id'; 

    const result = await orderService.findByIdService(id);

    expect(result).toEqual(mockedOrder);

    expect(Order.findById).toHaveBeenCalledWith(id);
    expect(Order.findById().populate).toHaveBeenCalledWith('cliente', 'nome');
    expect(Order.findById().populate().populate).toHaveBeenCalledWith({
      path: 'produtos',
      populate: 'produto',
    });
  });
});

