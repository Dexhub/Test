module.exports = {
  /**
	* Response Header constants
	*/
  RES_HEADER: {
    CONTENT_TYPE: 'application/json',
    CHAR_SET: 'utf-8',
  },

  /**
  * Constants used throughout the app
  */
  CONSTANTS: {
    SIMULATION_API_CLIENT_ID: 'qsGurtExxuz6LoLzMGKtHpGLpsLyMyIp',
    GAME_CLICK_URL: 'http://ecs-first-run-alb-1992293428.eu-central-1.elb.amazonaws.com/simulate/game/game_click',
    GAME_SPIN_URL: 'http://ecs-first-run-alb-1992293428.eu-central-1.elb.amazonaws.com/simulate/game/spin',
    API_POST_METHOD: 'post',
    UPDATE_GAME_RESULTS_TIMEOUT: 65000,
    GAME_SPIN_TIMEOUT: 200,
    SIMULATION_RTP_CALCULATE_TIMEOUT: 65000,
    SIMULATION_RTP_CHECK_TIMEOUT: 70000,
  },

  /**
	* Response Messages Constants
	*/
  RES_MESSAGES: {
    OK: 'OK',
    NOT_FOUND: 'Requested resource not found on server',
    PING: 'ping',
    GAME_NOT_FOUND: 'Requested game not found',
    GAME_ID_REQUIRED: 'please provide game id',
    GAME_NAME_REQUIRE: 'please provide game name',
    GAME_VERSION_NOT_FOUND: 'Requested game version not found',
    FAILED_AUTHENTICATION: 'failed to authenticate token',
    PARAM_MISSING: 'parameters missing in request',
    USER_NOT_FOUND: 'username does not exist!!',
    NO_TOKEN_PROVIDED: 'no token provided!!',
    PASSWORD_INCORRECT: 'provided password is incorrect!!',
    SOMETHING_WRONG: 'something went wrong!Please try again later.',
    BAD_REQ: 'bad request',
    GAME_ADDED: 'Game has been successfully added',
    GAME_UPDATED: 'Game has been successfully updated',
    GAME_DELETED: 'Game has been successfully deleted',
    GAME_STAGE_UPDATED: 'Game environment has been successfully updated',
    GAME_STARTED: 'Game has successfully been started',
    GAME_STAGE_ERROR: 'Game environment can not go from higher to lower!',
    GAME_STAGE_SAME: 'Game is already in requested stage!',
    GAME_CONTROL_UPDATED: 'Game control has been successfully deleted',
    GAME_VERSION_ADDED: 'Game version has been successfully added',
    KEY_NOT_FOUND: 'key does not exist',
    KEY_EXISTS: 'key exists!!Please use another game ID',
    SIMULATION_STARTED: 'game simulation has been started!!',
    RTP_SIMULATION_STARTED: 'Rtp simulation for this game has been stopped!!',
    RTP_SIMULATION_STOPPED: 'Rtp simulation for this game has been stopped',
    ROE_SIMULATION_STOPPED: 'game ROE simulation has been stopped!!',
    GAME_ROE_BEING_SIMULATED: 'you can\'t simulate game ROE while it\'s already being simulated',
    GAME_RTP_BEING_SIMULATED: 'you can\'t simulate game RTP while it\'s already being simulated',
    INVALID_DETAILS: 'Provided details are invalid!!',
    RTP_SIMULATION_ACTIVE: 'Sorry cannot start simulation now, active simulation must first finish or stop',
    RTP_SIMULATION_RESULT: 'rtp simulation results',
    ROE_SIMULATION_RESULT: 'roe simulation results',
    RTP_SIMULATION_ROUNDS: 'rtp simulation per round',
    NO_SIMULATION_FOUND: 'no simulation found for this game',
  },

  /**
	* HTTP Code constants
	*/
  HTTP_STATUS: {
    OK: 200,
    NOT_FOUND: 404,
    BAD_REQ: 400,
    SOMETHING_WRONG: 501,
    CONFLICT: 409,
    FAILED_AUTHENTICATION: 401,
  },
};
