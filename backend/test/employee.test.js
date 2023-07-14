import employeeService from "../src/services/employee.service";
import Employee from "../src/models/Employee";

jest.mock("../src/models/Employee", () => ({
    create: jest.fn(),
    find: jest.fn(),
    findOneAndDelete: jest.fn(),
    findById: jest.fn(),
  }));

describe("createService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Deve criar um funcionário", async () => {
    const mockEmployee = { nomeCompleto: "Bruna Alencar", username: "BrunaAlencar" };
    const createdEmployee = { _id: "employee_id", ...mockEmployee };

    Employee.create.mockResolvedValueOnce(createdEmployee);

    const result = await employeeService.createService(mockEmployee);

    expect(Employee.create).toHaveBeenCalledTimes(1);
    expect(Employee.create).toHaveBeenCalledWith(mockEmployee);
    expect(result).toEqual(createdEmployee);
  });

  it("Caso se erro durante criação de funcionário", async () => {
    const mockEmployee = { nomeCompleto: "Bruna Alencar", username: "BrunaAlencar" };
    const mockError = new Error("Falha ao criar funcionário");

    Employee.create.mockRejectedValueOnce(mockError);

    await expect(employeeService.createService(mockEmployee)).rejects.toThrowError(
      mockError
    );
  });
});

describe("findAllService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Deve retorar todos os funcionários", async () => {
    const mockEmployees = [
      { _id: 1, nomeCompleto: "Bruna Alencar", username: "BrunaAlencar" },
      { _id: 2, nomeCompleto: "Rafael Silva", username: "RafaelSilva" },
    ];

    Employee.find.mockResolvedValueOnce(mockEmployees);

    const expectedResult = mockEmployees;

    const result = await employeeService.findAllService();

    expect(Employee.find).toHaveBeenCalled();
    expect(result).toEqual(expectedResult);
  });
});

describe("findByIdService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Deve encontrar funcionário pelo seu ID", async () => {
    const mockedEmployee = { _id: "employee_id", nomeCompleto: "Bruna Alencar" };

    Employee.findById.mockResolvedValueOnce(mockedEmployee);

    const id = "employee_id";

    const result = await employeeService.findByIdService(id);

    expect(Employee.findById).toHaveBeenCalledWith(id);
    expect(result).toEqual(mockedEmployee);
  });
});

describe("updateService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Deve atualizar um funcionário", async () => {
    const mockedEmployee = { _id: "employee_id", nomeCompleto: "Bruna Alencar" };
    const updatedEmployee = { _id: "employee_id", nomeCompleto: "Rafael Silva" };

    Employee.findOneAndUpdate = jest.fn().mockResolvedValueOnce(updatedEmployee);

    const id = "employee_id";
    const nomeCompleto = "Bruna Alencar";
    const username = "BrunaAlencar";
    const password = "password";
    const telefone = "123456789";
    const email = "BrunaAlencar@gmail.com";
    const dataContratacao = "2023-01-01";

    const result = await employeeService.updateService(
      id,
      nomeCompleto,
      username,
      password,
      telefone,
      email,
      dataContratacao
    );

    expect(Employee.findOneAndUpdate).toHaveBeenCalledWith(
      { _id: id },
      {
        nomeCompleto,
        username,
        password,
        telefone,
        email,
        dataContratacao,
      }
    );
    expect(result).toEqual(updatedEmployee);
  });
});

describe("deleteService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Deve deletar funcionário", async () => {
    const mockedEmployee = { _id: "employee_id", nomeCompleto: "Bruna Alencar" };

    Employee.findOneAndDelete.mockResolvedValueOnce(mockedEmployee);

    const id = "employee_id";

    const result = await employeeService.deleteService(id);

    expect(Employee.findOneAndDelete).toHaveBeenCalledWith({ _id: id });
    expect(result).toEqual(mockedEmployee);
  });
});
