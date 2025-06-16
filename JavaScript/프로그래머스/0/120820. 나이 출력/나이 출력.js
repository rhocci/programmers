function solution(age){
    if (0 < age && age <= 120){
        return 2022 - age + 1;
    }
    return "다시 입력";
}