import { Board } from './Board';
import { Settings } from "./Settings";
import { Snake } from "./Snake";

export class Food  {
	public x: number;
	public y: number;
	public settings: Settings;
	public snake: Snake;
	public board: Board;

	public constructor(settings:Settings, snake:Snake, board:Board) {
    this.x = 0;
	 this.y = 0;
	 this.settings = settings;
    this.snake = snake;
    this.board = board;
  }

  //Получение координат новой ячейки и отрисовка на поле
 public setNewFood(): void{
    const food:Food = this.randomCoords();
    this.board.renderFood(food);
  }

  //Возвращает случайные координаты
  public randomCoords(): Food {
    while (true) {
      this.x = Math.floor(Math.random() * this.settings.colsCount) + 1;
      this.y = Math.floor(Math.random() * this.settings.rowsCount) + 1;
      let cell: HTMLTableCellElement|null = this.board.getCell(this.x, this.y);

      if (cell && cell.classList.contains("snake")) {
        continue;
      }
      return this;
    }
  }

  //Размещение еды на игровом поле
  public setFood():void {
    this.board.renderFood(this);
  }
}