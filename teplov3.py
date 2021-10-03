import random

play = ''
while play != 'n':
    x = input('Загадайте число от 1 до 100: ')
    succ = ''
    tmp = [1, 100]
    count = 0
    rnd = random.randint(1, 100)
    while succ != 'y':
        succ = input(f'возможно вы загадали это число {rnd}? (y/n): ')
        count += 1
        if succ == 'n':
            if input('Больше или меньше (b/m)?: ') == 'b':
                tmp[0] = rnd
                rnd = (tmp[0] + tmp[1]) // 2
            else:
                tmp[1] = rnd
                rnd = (tmp[0] + tmp[1]) // 2
    print(f' Угадал с {count} попыток!')
    play = input('Сыграем еще раз? (y/n): ')