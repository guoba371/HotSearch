import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { RadarDashboard } from "@/components/radar-dashboard";

describe("RadarDashboard", () => {
  it("exposes the eight operating regions", () => {
    render(<RadarDashboard />);

    const names = [
      "工作台导航",
      "本周概览",
      "采集状态",
      "趋势脉搏",
      "核心机会",
      "审核队列",
      "证据覆盖",
      "商家档案",
      "本周动作",
    ];

    names.forEach((name) => {
      expect(screen.getByRole("region", { name })).toBeInTheDocument();
    });
  });

  it("shows five evidence-backed core opportunities", () => {
    render(<RadarDashboard />);

    const list = screen.getByRole("list", { name: "核心机会列表" });
    expect(within(list).getAllByRole("listitem")).toHaveLength(5);
  });

  it("approves a queued opportunity and updates the pending count", async () => {
    const user = userEvent.setup();
    render(<RadarDashboard />);

    expect(screen.getByText("3 项待审核")).toBeInTheDocument();
    expect(screen.getAllByText("已批准", { selector: "span" })).toHaveLength(2);
    await user.click(screen.getByRole("button", { name: "批准 老房翻新预算最容易漏掉的五项" }));

    expect(screen.getByRole("button", { name: "正在批准 老房翻新预算最容易漏掉的五项" })).toBeDisabled();
    expect(await screen.findByText("2 项待审核")).toBeInTheDocument();
    expect(screen.getAllByText("已批准", { selector: "span" })).toHaveLength(3);
  });

  it("disables unavailable commands and locks delivery until review is complete", async () => {
    const user = userEvent.setup();
    render(<RadarDashboard />);

    expect(screen.getByRole("button", { name: "搜索" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "发送周报" })).toBeDisabled();

    for (const title of [
      "老房翻新预算最容易漏掉的五项",
      "全屋定制报价为什么能差六万元",
      "装修合同里最该逐字确认的七句话",
    ]) {
      const approveButton = screen.getByRole("button", { name: `批准 ${title}` });
      await waitFor(() => expect(approveButton).toBeEnabled());
      await user.click(approveButton);
      await waitFor(() => expect(screen.queryByRole("button", { name: `批准 ${title}` })).not.toBeInTheDocument());
    }

    await waitFor(() => expect(screen.getByRole("button", { name: "发送周报" })).toBeEnabled());
  });

  it("switches between light and dark themes", async () => {
    const user = userEvent.setup();
    render(<RadarDashboard />);

    expect(document.documentElement).not.toHaveAttribute("data-theme", "dark");
    await user.click(screen.getByRole("button", { name: "切换深色模式" }));

    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    expect(screen.getByRole("button", { name: "切换浅色模式" })).toBeInTheDocument();
  });
});
