import { createStitches } from '@stitches/core';

// 創建 Stitches 配置
export const { css } = createStitches({
  media: {
    // 定義響應式斷點
    sm: '(min-width: 480px)',  // 小螢幕，最小寬度 480px
    md: '(min-width: 768px)',  // 中等螢幕，最小寬度 768px
    lg: '(min-width: 1024px)', // 大螢幕，最小寬度 1024px
    xl: '(min-width: 1200px)', // 超大螢幕，最小寬度 1200px
  },
});
