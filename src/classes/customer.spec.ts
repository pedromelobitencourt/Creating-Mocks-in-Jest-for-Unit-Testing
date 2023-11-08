import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Pedro', 'Bitencourt', '111.111');
    expect(sut).toHaveProperty('firstName', 'Pedro');
    expect(sut).toHaveProperty('lastName', 'Bitencourt');
    expect(sut).toHaveProperty('cpf', '111.111');
  });

  it('should have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCustomer('Pedro', 'Bitencourt', '111.111');
    expect(sut.getName()).toBe('Pedro Bitencourt');
    expect(sut.getIDN()).toBe('111.111');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('CEFET', '222');
    expect(sut).toHaveProperty('name', 'CEFET');
    expect(sut).toHaveProperty('cnpj', '222');
  });

  it('should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('CEFET', '222');
    expect(sut.getName()).toBe('CEFET');
    expect(sut.getIDN()).toBe('222');
  });
});
