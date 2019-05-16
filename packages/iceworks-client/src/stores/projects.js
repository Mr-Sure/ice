import socket from '@src/socket';

export default {
  dataSource: [],
  async refresh() {
    this.dataSource = await socket.emit('project.index.list');
  },
  async add(projectPath) {
    this.dataSource = await socket.emit('project.index.add', { projectPath });
  },
  async delete(params) {
    this.dataSource = await socket.emit('project.index.delete', params);
  },
};
