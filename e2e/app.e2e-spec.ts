import { CourserangPage } from './app.po';

describe('courserang App', function() {
  let page: CourserangPage;

  beforeEach(() => {
    page = new CourserangPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
