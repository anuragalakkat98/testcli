import {expect, test} from '@oclif/test'

describe('tasks/copy', () => {
  test
  .stdout()
  .command(['tasks/copy'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['tasks/copy', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
