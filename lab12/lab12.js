document.addEventListener('DOMContentLoaded', () => {
  const sudokuBoard = document.getElementById('sudoku-board');
  const numberButtons = document.querySelectorAll('#number-buttons button');
  const setBut = document.querySelectorAll('#settings-buttons button');
  let selectedCell = null;

  // Функция для добавления числа в ячейку судоку
  function AddNumber(row, column, value) {
      const squareIndex = Math.floor(row / 3) * 3 + Math.floor(column / 3);
      if (sudoku.Sudoky[row][column] !== null) {
          console.log("ERROR: Ячейка не пустая!");
          return false;
      }

      if (value == sudoku.NullArr[row][column]) {
          sudoku.Sudoky[row][column] = value;
          console.table(sudoku.Sudoky);
          return true;
      } else {
          console.log(`ERROR: row: ${row}, column: ${column}, square: ${squareIndex}, value: ${value}`);
          return false;
      }
  }

  // Добавление обработчиков событий для всех ячеек
  const cells = sudokuBoard.querySelectorAll('div');
  cells.forEach((cell, index) => {
      const row = Math.floor(index / 9);
      const column = index % 9;
      cell.setAttribute('data-row', row);
      cell.setAttribute('data-column', column);

      cell.addEventListener('click', (event) => {
          // Снять выделение с предыдущей выбранной ячейки
          if (selectedCell) {
              selectedCell.classList.remove('selected');
          }
          // Отметить текущую ячейку как выбранную
          selectedCell = event.target;
          selectedCell.classList.add('selected');
      });
  });


  setBut.forEach(button =>{
    button.addEventListener('click', (event) =>{
      if(button === setBut[0]){
        cells.forEach(element => {
          element.textContent = null;
          element.removeAttribute("readonly");
      });
        sudoku.NullArr = new Array(GRID_SIZE).fill().map(() => new Array(GRID_SIZE).fill(null));
        sudoku.generateSudoku();
        sudoku.RemoveCell();
        fillBoard(sudokuBoard, sudoku.Sudoky);
      }
      if(button === setBut[2]){
        fillBoard(sudokuBoard, sudoku.NullArr);
      }
    })
  })

  // Обработчик для кнопок с цифрами
  numberButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          if (selectedCell && !selectedCell.hasAttribute('readonly')) {
              const row = parseInt(selectedCell.getAttribute('data-row'), 10);
              const column = parseInt(selectedCell.getAttribute('data-column'), 10);
              const value = parseInt(event.target.textContent, 10);
              if (AddNumber(row, column, value)) {
                  selectedCell.textContent = value;
                  selectedCell.setAttribute("readonly", true);
              }
              selectedCell.classList.remove('selected');
              selectedCell = null;
          }
      });
  });

  // Заполнение таблицы значениями
  fillBoard(sudokuBoard, remBoard);
});

function fillBoard(board, remBoard) {
  for (let i = 0; i < 9; i++) {
      const row = board.querySelectorAll('tr');
      const column = row[i].querySelectorAll('td');

      for (let j = 0; j < 9; j++) {
          const div = column[j].querySelector('div');
          if (remBoard[i][j] !== null) {
              div.textContent = remBoard[i][j];
              div.setAttribute('readonly', true);
          }
      }
  }
}




const GRID_SIZE = 9;
const BOX_SIZE = 3;

class Sudoku {
  NullArr = new Array(GRID_SIZE).fill().map(() => new Array(GRID_SIZE).fill(null));
  Sudoky = new Array(GRID_SIZE).fill().map(() => new Array(GRID_SIZE).fill(null));
  Default = null;

  generateSudoku() {
      const empty = this.findEmpty(this.NullArr);
      if (!empty) return true;

      const numbers = this.GetRandomNumbers();

      for (let i = 0; i < numbers.length; i++) {
          if (!this.validate(this.NullArr, empty.row, empty.column, numbers[i])) continue;

          this.NullArr[empty.row][empty.column] = numbers[i];

          if (this.generateSudoku()) return true;

          this.NullArr[empty.row][empty.column] = null;
      }
  }

  findEmpty(grid) {
      for (let row = 0; row < GRID_SIZE; row++) {
          for (let column = 0; column < GRID_SIZE; column++) {
              if (grid[row][column] === null) {
                  return { row, column };
              }
          }
      }
      return null;
  }

  GetRandomNumbers() {
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      for (let i = numbers.length - 1; i >= 0; i--) {
          const randomIndex = Math.floor(Math.random() * (i + 1));
          [numbers[i], numbers[randomIndex]] = [numbers[randomIndex], numbers[i]];
      }
      return numbers;
  }

  validate(grid, row, column, value) {
      return this.valColumn(grid, row, column, value) &&
          this.valRow(grid, row, column, value) &&
          this.valBox(grid, row, column, value);
  }

  valColumn(grid, row, column, value) {
      for (let iRow = 0; iRow < GRID_SIZE; iRow++) {
          if (grid[iRow][column] === value && iRow !== row) return false;
      }
      return true;
  }

  valRow(grid, row, column, value) {
      for (let iColumn = 0; iColumn < GRID_SIZE; iColumn++) {
          if (grid[row][iColumn] === value && iColumn !== column) return false;
      }
      return true;
  }

  valBox(grid, row, column, value) {
      const firstRow = row - row % BOX_SIZE;
      const firstColumn = column - column % BOX_SIZE;

      for (let iRow = firstRow; iRow < firstRow + BOX_SIZE; iRow++) {
          for (let iColumn = firstColumn; iColumn < firstColumn + BOX_SIZE; iColumn++) {
              if (grid[iRow][iColumn] === value && iRow !== row && iColumn !== column) return false;
          }
      }
      return true;
  }

  RemoveCell() {
      const REM = 40;
      this.Sudoky = JSON.parse(JSON.stringify(this.NullArr));

      let i = 0;

      while (i < REM) {
          const row = Math.floor(Math.random() * GRID_SIZE);
          const column = Math.floor(Math.random() * GRID_SIZE);

          if (this.Sudoky[row][column] !== null) {
              this.Sudoky[row][column] = null;
              i++;
          }
      }

      this.Default = JSON.parse(JSON.stringify(this.Sudoky));
  }

  AddNumber(row, column, value) {
      const squareIndex = Math.floor(row / 3) * 3 + Math.floor(column / 3);
      if (this.Sudoky[row][column] !== null) {
          console.log("ERROR: Ячейка не пустая!");
          return false;
      }

      if (value == this.NullArr[row][column]) {
          this.Sudoky[row][column] = value;
          console.table(this.Sudoky);
          return true;
      } else {
          console.log(`ERROR: row: ${row}, column: ${column}, square: ${squareIndex}, value: ${value}`);
          return false;
      }
  }

  Reset() {
      this.Sudoky = JSON.parse(JSON.stringify(this.Default));
  }
}

let sudoku = new Sudoku();

sudoku.generateSudoku();
console.table(sudoku.NullArr);
sudoku.RemoveCell();
console.table(sudoku.Sudoky);

const remBoard = sudoku.Sudoky;

const board = document.querySelector("#sudoku-board");
