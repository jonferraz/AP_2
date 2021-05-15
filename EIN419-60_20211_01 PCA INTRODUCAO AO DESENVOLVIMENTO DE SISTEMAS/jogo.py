import random



frutas = [['Morango'], ['Coco'], ['Banana'], ['Abacaxi'], ['Limão'], ['Laranja'], ['Maçã'], ['Pera'], ['Uva']]
veiculos = [['Onibus'], ['Trem'], ['Carro'], ['Avião'], ['Moto'], ['Caminhão']]
animais = [['Macaco'], ['Girafa'], ['Gato'], ['Cachorro'], ['Gorila'], ['Zebra'], ['Boi'], ['Cavalo'], ['Rato']]
listaErradas = list()
listaCertas = list()

def linha():
    print('\033[1;31m' + '~' * 30 + '\033[0;0m')


def f_jogo():
    lista_frutas = random.choice(frutas)
    lista_veiculos = random.choice(veiculos)
    lista_animais = random.choice(animais)
    teste = (lista_frutas[0], lista_veiculos[0], lista_animais[0])
    fase = random.choice(teste)
    linha()
    print(f'Digite a relação do item: {fase}')
    print(f'[1] para fruta\n'
          f'[2] para Veículo\n'
          f'[3] para animal\n')
    linha()
    escolha = int(input('Escolha uma opção: '))

    print(f'Resultado fase {fase} e escolha {escolha}')

    if escolha == 1:
        escolhido = 'fruta'
        if fase in lista_frutas:
            print('CERTA RESPOSTA!')
            listaCertas.append(1)
        else:
            print('RESPOSTA ERRADA!')
            listaErradas.append(1)

    elif escolha == 2:
        if fase in lista_veiculos:
            print('CERTA RESPOSTA!')
            listaCertas.append(1)
        else:
            print('RESPOSTA ERRADA!')
            listaErradas.append(1)


    elif escolha == 3:
        if fase in lista_animais:
            print('CERTA RESPOSTA!')
            listaCertas.append(1)
        else:
            print('RESPOSTA ERRADA!')
            listaErradas.append(1)


    else:
        print('Opção invalida, tente novamente.')

    linha()
    querJogar= int(input('\nQuer jogar de novo?\n'
                         '[1] Sim\n'
                         '[2] Não: '))
    while querJogar == 1:
        print('\n\n')
        f_jogo()
        break


linha()
print(('\033[1;33m' + 'JOGO DE RELACIONAR' + '\033[0;0m'))
linha()

f_jogo()

print(f'A quantidade de respostas certas foram: {len(listaCertas)}\nA quantidade de respostas erradas foram: {len(listaErradas)}')
