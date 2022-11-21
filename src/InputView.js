const { Console } = require("@woowacourse/mission-utils");
const { VALID_CHAR } = require("./constants");
const ErrorChecker = require("./ErrorChecker");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.readLine("다리의 길이를 입력해주세요.\n", (bridgeSize) => {
      Console.print("");
      ErrorChecker.checkBridgeSizeValidation(bridgeSize);
      bridgeGame.init(bridgeSize);
      this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (movingStep) => {
      ErrorChecker.checkValidChar(VALID_CHAR.UP, VALID_CHAR.DOWN, movingStep);
      bridgeGame.move(movingStep);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() { },
};

module.exports = InputView;
