/**
 * @class PagesController
 *
 * @export
 *
 */
export default class PagesController {
  /**
     * @description - Gets the home page
     * @static
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     *
     * @memberof PagesController
     *
     * @returns {object} Class instance
     */
  getHome(req, res) {
    res.render('index');
  }
}

