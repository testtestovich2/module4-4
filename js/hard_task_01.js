// Первая задача

// В отдельном файле hard_task_01
// Напишите функцию, вычисляющую наибольший общий делитель двух чисел

const NOD = (x, y) => {
	if (y > x) return NOD(y, x);
	if (!y) return x;
	return NOD(y, x % y);
}

console.log(NOD(10, 25));